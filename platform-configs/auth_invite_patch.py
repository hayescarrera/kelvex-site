# PATCH: Drop this into backend/app/api/v1/auth.py
# Replaces the open register endpoint with invite-token-gated registration.
#
# How it works:
#   POST /auth/register?invite=<INVITE_SECRET>
#   If REGISTRATION_OPEN=true in env, the invite param is not required (dev mode).
#   If REGISTRATION_OPEN=false (production), the correct INVITE_SECRET must be passed.
#
# Add to core/config.py:
#   REGISTRATION_OPEN: bool = True
#   INVITE_SECRET: str = ""
#
# Then replace the register endpoint body with the version below.

# ── Add to imports in auth.py ──────────────────────────────────────────────
# from fastapi import Query
# from app.core.config import get_settings

# ── Replace the register endpoint ─────────────────────────────────────────
"""
@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def register(
    data: RegisterRequest,
    db: AsyncSession = Depends(get_db),
    invite: str | None = Query(None, description="Invite token required in production"),
):
    settings = get_settings()

    # Gate registration in production
    if not settings.REGISTRATION_OPEN:
        if not invite or invite != settings.INVITE_SECRET:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Registration is by invitation only. Contact ben@kelvex.io to request access.",
            )

    # Check email not already taken
    existing = (await db.execute(
        select(User).where(User.email == data.email.lower())
    )).scalar_one_or_none()
    if existing:
        raise HTTPException(status_code=409, detail="Email already registered")

    # ... rest of existing register logic unchanged ...
"""
