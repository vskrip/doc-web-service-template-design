
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { GroupsComponent } from './views/groups/groups.component';
import { PackagesComponent } from './views/packages/packages.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { InboundComponent } from './views/buckets/inbound/inbound.component';
import { OutboundComponent } from './views/buckets/outbound/outbound.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'buckets', children:
    [
      { path: 'inbound', component: InboundComponent },
      { path: 'outbound', component: OutboundComponent },
    ]
  },
  { path: 'groups', children:
    [
      { path: 'v1', component: GroupsComponent },
    ]
  },
  { path: 'packages', children:
    [
      { path: 'v1', component: PackagesComponent },
    ]
  },
  { path: 'documents', children:
    [
      { path: 'v1', component: DocumentsComponent },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
