export default function DomainBadge({ domain }) {
  return <span className={`badge badge-d${domain}`}>Domain {domain}</span>;
}
