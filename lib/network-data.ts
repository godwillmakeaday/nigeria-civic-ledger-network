export type StateNode = { slug: string; name: string; status: "Active State Node" | "Proposed Node"; desk: string; region: string; readiness: string; active: boolean };
const slugify = (s: string) => s.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
const states = ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"];
export const stateNodes: StateNode[] = states.map(name => ({
  slug: slugify(name),
  name,
  status: name === "Nasarawa" ? "Active State Node" : "Proposed Node",
  desk: name === "Nasarawa" ? "Nasarawa Heartland" : `${name} Civic Ledger`,
  region: "Region placeholder",
  readiness: name === "Nasarawa" ? "Public prototype deployed" : "Awaiting local editorial structure",
  active: name === "Nasarawa"
}));
export const nationalIssues = ["Governance and Public Records", "Local Government Visibility", "Land and Community Questions", "Agriculture and Food Systems", "Education and Skills", "Youth Economy", "Women and Community Economy", "Traditional Institutions", "Faith and Peacebuilding", "Security and Justice", "Health and Community Care", "Markets and Enterprise", "Urban Growth", "Environmental Responsibility", "State Identity and Heritage"];
export const methodology = ["Source-note discipline", "Verification before publication", "Public records classification", "LGA-level documentation", "Issue desk tagging", "Sensitivity review", "Correction history", "Right of reply", "No incitement rule", "No personal data publication", "Public-interest restraint"];
export const workflow = ["Contributor submits record", "LGA or issue desk review", "Verification review", "Sensitivity review where necessary", "State editor approval", "Publication and correction channel"];
export const replication = ["State identity doctrine", "LGA directory setup", "Issue desk setup", "Editorial team setup", "Source-note policy", "Sensitivity rules", "Correction policy", "Public submission form", "Database readiness", "Deployment checklist"];
