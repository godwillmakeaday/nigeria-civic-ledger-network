import Link from "next/link";
import { notFound } from "next/navigation";
import { stateNodes } from "@/lib/network-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stateNodes.map((state) => ({ slug: state.slug }));
}

export default async function StateNodePage({ params }: PageProps) {
  const { slug } = await params;

  const node = stateNodes.find((state) => state.slug === slug);

  if (!node) notFound();

  return (
    <main className="section">
      <div className="container">
        <div className="section-title">
          <div className="kicker">State Node</div>
          <h2>{node.name}</h2>
          <p>
            {node.active
              ? "Active first state-node prototype within the Nigeria Civic Ledger model."
              : "Proposed node awaiting a local editorial desk and verified state-specific civic structure."}
          </p>
        </div>

        <div className="grid two">
          <article className="card">
            <span className={node.active ? "node-status active" : "node-status"}>
              {node.status}
            </span>

            <h3>{node.desk}</h3>

            <div className="meta">
              <b>Civic profile</b>
              <span>Awaiting state-specific verified doctrine and profile.</span>

              <b>LGA structure</b>
              <span>To be configured through verified local government data.</span>

              <b>Development observatory</b>
              <span>Placeholder for issue desks and source-backed records.</span>

              <b>Local institutions</b>
              <span>
                Traditional, educational, faith, market, and community
                institutions require source notes.
              </span>

              <b>Readiness</b>
              <span>{node.readiness}</span>
            </div>
          </article>

          <article className="card">
            <h3>Replication requirements</h3>
            <p>
              State identity doctrine, local editorial team, LGA directory,
              issue desk setup, source-note policy, sensitivity review,
              correction policy, and deployment checklist.
            </p>

            {node.active && (
              <Link className="card-link" href="/network/nasarawa-heartland">
                Open Nasarawa Heartland node →
              </Link>
            )}

            <Link className="card-link" href="/network/replicate">
              Prepare this State Node →
            </Link>
          </article>
        </div>

        <div className="warning">
          Land, community identity, security, traditional institutions, and
          allegations require special review before publication.
        </div>
      </div>
    </main>
  );
}
