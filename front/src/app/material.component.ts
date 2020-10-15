import {NgModule} from '@angular/core';
import {MatMenuModule,} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
@NgModule ({
    imports: [
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatSelectModule
    ],
    exports: [
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatTableModule,
        CdkTableModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class MaterialComponent {}