import { getDashboard } from '../components/api'

function CredibilityBadge({ value }: { value: 'high' | 'medium' | 'watch' }) {
  return <span className={`badge ${value}`}>{value === 'high' ? 'High credibility' : value === 'medium' ? 'Medium credibility' : 'Watch'}</span>
}

export default async function Page() {
  const data = await getDashboard()

  return (
    <main className="page">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">H</div>
          <div>
            <strong>Horizon Radar</strong>
            <span>Financial services scanning</span>
          </div>
        </div>
        <nav className="nav">
          <a className="active">Overview</a>
          <a>Themes</a>
          <a>Credibility</a>
          <a>Feedback</a>
        </nav>
      </aside>

      <section className="content">
        <div className="hero card">
          <p className="eyebrow">General financial services radar</p>
          <h1>See the issues emerging across financial services.</h1>
          <p className="lede">A UK-first horizon-scanning dashboard for emerging risks, structural trends and modern cross-cutting challenges.</p>
          <div className="themes">
            {data.themes.map((theme: string) => (
              <span key={theme} className="themeChip">{theme}</span>
            ))}
          </div>
        </div>

        <div className="issuesWrap">
          <div className="sectionHead">
            <div>
              <h2>Top emerging issues</h2>
              <p>Every issue includes a visible so what section.</p>
            </div>
          </div>

          {data.issues.map((issue: any) => (
            <article className="card issueCard" key={issue.id}>
              <div className="issueTop">
                <div>
                  <h3>{issue.title}</h3>
                  <p>{issue.summary}</p>
                </div>
                <CredibilityBadge value={issue.credibility} />
              </div>
              <div className="metaRow">
                <span>{issue.theme}</span>
                <span>{issue.geography}</span>
              </div>
              <div className="sowhat">
                <strong>So what?</strong>
                <p>{issue.so_what}</p>
              </div>
              <div className="feedbackRow">
                <button>👍 Relevant</button>
                <button>👎 Not useful</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
