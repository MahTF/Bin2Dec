import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        FooterComponent,
        CardComponent
    ],
    exports: [
        FooterComponent,
        CardComponent
    ],
    imports: [
        MatCardModule,
        MatInputModule,
        FormsModule
    ]
})

export class CoreModule { }
