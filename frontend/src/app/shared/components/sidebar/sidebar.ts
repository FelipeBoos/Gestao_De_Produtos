import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
  menuItens: MenuItem[] = [
    {
      label: 'Produtos'
    },
    {
      label: 'Categorias'
    },
    {
      label: 'Pedidos'
    },
    {
      label: 'Usuarios'
    }
  ]
}
