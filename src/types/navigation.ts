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
