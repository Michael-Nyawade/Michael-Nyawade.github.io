// Official brand marks for the tools listed on project cards, from the
// simple-icons package. Only tools that have a recognized brand icon are
// listed here - anything else (e.g. matplotlib, seaborn) just renders as
// plain text in the stack list, which is intentional, not a gap.
import { siPython, siPandas, siScikitlearn, siPytest } from "simple-icons";

const icons = {
  Python: siPython,
  pandas: siPandas,
  "scikit-learn": siScikitlearn,
  pytest: siPytest,
};

export function iconFor(toolName) {
  const icon = icons[toolName];
  if (!icon) return null;
  return { path: icon.path, hex: `#${icon.hex}` };
}
