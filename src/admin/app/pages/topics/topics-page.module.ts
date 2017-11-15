import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { TopicsPage } from './topics-page';


import { TasksList } from './topics-list/topics-list';
import { TopicsListAdd } from './topics-list/topics-list-add/topics-list-add';

import { TopicsGroup } from './topics-group/topics-group';
import { TopicsGroupAdd } from './topics-group/topics-group-add/topics-group-add';

import { TopicsTags } from './topics-tags/topics-tags';
import { TopicsTagsAdd } from './topics-tags/topics-tags-add/topics-tags-add';
import { TopicsGroupItem } from './topics-group/topics-group-item/topics-group-item';



const routes: Routes = [
    {
        path: '',
        component: TopicsPage
    }
];
import { ShareModule } from '../../share';

const modules = [
    ShareModule
];

@NgModule({
    declarations: [
        TopicsPage,
        TasksList,
        TopicsListAdd,
        TopicsGroup,
        TopicsGroupAdd,
        TopicsGroupItem,
        TopicsTags,
        TopicsTagsAdd
    ],
    imports: [ 
        CommonModule, 
        RouterModule.forChild(routes),
        ...modules
    ],
    exports: [],
    providers: [],
    entryComponents: [
        TopicsTagsAdd,
        TopicsGroupAdd,
        TopicsListAdd
    ]
})
export class TopicsPageModule {}
