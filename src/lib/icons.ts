import {
  Banknote,
  Boxes,
  ClipboardList,
  Cpu,
  FileCheck2,
  GraduationCap,
  HardHat,
  Handshake,
  Megaphone,
  ShieldCheck,
  ShoppingBag,
  UserSearch,
  Users,
} from "lucide-react";

export const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  recruitment: UserSearch,
  staffing: Users,
  "campus-hiring": GraduationCap,
  training: ClipboardList,
  "background-verification": ShieldCheck,
  "higher-education": GraduationCap,
  compliance: FileCheck2,
  "digital-marketing": Megaphone,
};

export const industryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Building Materials": Boxes,
  "FMCG & Electronics": Cpu,
  Engineering: HardHat,
  "Retail & E-commerce": ShoppingBag,
  "IT & ITES": Cpu,
  BFSI: Banknote,
};

export const hiringCategoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Engineering & IT": Cpu,
  "Sales & Retail": ShoppingBag,
  "Finance & BFSI": Banknote,
  "HR & Operations": Users,
  "FMCG & Manufacturing": Boxes,
  "Campus / Entry-Level": GraduationCap,
};

export const processIcons = [ClipboardList, Users, Handshake];
