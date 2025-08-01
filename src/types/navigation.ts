// Base interface for navigation items
export interface NavigationItem {
  id: string; // Identificador único (ex: "about", "projects")
  label: string; // Texto exibido no menu (ex: "Sobre", "Projetos")
  href: string; // Link de destino (ex: "#about", "#projects")
  isExternal?: boolean; // Se é link externo (opcional)
}

// Header component configuration
export interface HeaderProps {
  navigationItems: NavigationItem[]; // Lista de itens do menu
  logo?: string; // Texto/nome do logo (opcional)
  className?: string; // Classes CSS adicionais (opcional)
  isFixed?: boolean; // Se header fica fixo no topo (opcional)
}

// Mobile menu state management
export interface MobileMenuState {
  isOpen: boolean; // Se menu está aberto
  toggle: () => void; // Função para abrir/fechar
}

// Active section state management (highlighted)
export interface ActiveSection {
  currentSection: string; // Seção ativa (ex: ID da seção "about", "projects")
  setActiveSection: (id: string) => void; // Função para atualizar seção
}
