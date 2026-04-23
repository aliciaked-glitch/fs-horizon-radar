const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export async function getDashboard() {
  const res = await fetch(`${API_BASE}/api/dashboard`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to load dashboard data')
  return res.json()
}

export async function sendFeedback(issueId: string, vote: 'up' | 'down') {
  const res = await fetch(`${API_BASE}/api/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ issue_id: issueId, vote })
  })
  if (!res.ok) throw new Error('Failed to send feedback')
  return res.json()
}
