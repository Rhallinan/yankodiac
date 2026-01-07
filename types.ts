export type ViewState = 'HOME' | 'ABOUT' | 'GALLERY';

export interface NavProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export interface MenuItem {
  label: string;
  price: string;
  action?: () => void;
  href?: string;
  isSpecial?: boolean;
  status?: 'OPEN' | 'CLOSED' | 'BUY' | 'JOIN';
}
