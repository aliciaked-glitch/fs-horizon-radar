from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Literal

app = FastAPI(title="FS Horizon Radar API")

class Issue(BaseModel):
    id: str
    title: str
    theme: str
    geography: str
    credibility: Literal["high", "medium", "watch"]
    summary: str
    so_what: str

class DashboardSummary(BaseModel):
    themes: List[str]
    issues: List[Issue]

@app.get("/")
async def root():
    return {"message": "FS Horizon Radar backend is running"}

@app.get("/api/dashboard", response_model=DashboardSummary)
async def get_dashboard():
    issues = [
        Issue(
            id="geo-natsec-1",
            title="Geopolitical tension, national security and strategic dependency risks are rising",
            theme="Geopolitics & national security",
            geography="UK + global",
            credibility="high",
            summary="Signals point to a stronger overlap between financial stability, national security, sanctions exposure, cyber resilience and strategic dependency risk, especially where firms operate across sensitive jurisdictions, critical infrastructure or defence-adjacent sectors.",
            so_what="This matters because geopolitical and national security shifts can quickly affect sanctions controls, transaction monitoring, third-party risk, cross-border exposures, client acceptance and the supervisory scrutiny applied to internationally active firms."
        ),
        Issue(
            id="cyber-res-1",
            title="Cyber resilience and operational resilience are converging into a single supervisory concern",
            theme="Cyber & resilience",
            geography="UK",
            credibility="high",
            summary="There is a stronger pattern of focus on cyber readiness, implementation evidence, testing quality and dependency mapping, with geopolitical pressures making technology concentration and third-party reliance more material.",
            so_what="This matters because resilience is becoming a judged capability rather than a policy statement, which raises the bar for boards, technology teams and firms that depend on complex data, cloud and third-party service chains."
        ),
        Issue(
            id="ai-digital-1",
            title="AI adoption, digital assets and non-bank financial activity are creating newer cross-cutting risks",
            theme="AI, digital assets & NBFI",
            geography="UK + Europe",
            credibility="medium",
            summary="Signals suggest continued pressure around AI governance, digital asset controls, rapid innovation outside traditional banking, and the challenge of supervising activities that cut across prudential, conduct and operational risk boundaries.",
            so_what="This matters because newer financial services risks do not sit neatly inside one policy box, so firms and regulators need a broader horizon-scanning view rather than relying only on traditional topics such as Basel, prudential standards or isolated rule changes."
        )
    ]

    themes = [
        "Emerging risks",
        "Horizon scanning",
        "Geopolitics, national security & sanctions",
        "Cyber, data & operational resilience",
        "AI, digital assets & non-bank finance"
    ]

    return DashboardSummary(themes=themes, issues=issues)

class FeedbackIn(BaseModel):
    issue_id: str
    vote: Literal["up", "down"]

@app.post("/api/feedback")
async def submit_feedback(payload: FeedbackIn):
    return {"status": "received", "issue_id": payload.issue_id, "vote": payload.vote}
