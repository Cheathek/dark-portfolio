// components/DevIcon.tsx
import {
  TypescriptIcon,
  PythonIcon,
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  GithubIcon,
  FigmaIcon,
  AwsIcon,
} from "developer-icons";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  TypeScript: TypescriptIcon,
  Python: PythonIcon,
  "React.js": ReactIcon,
  "Next.js": NextjsIcon,
  "Node.js": NodejsIcon,
  GitHub: GithubIcon,
  Figma: FigmaIcon,
  AWS: AwsIcon,
};

export default function DevIcon({
  name,
  size = 48,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name];
  return Icon ? <Icon size={size} className={className} /> : null;
}
