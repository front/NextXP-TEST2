import {CATCH_ALL, ComponentRegistry} from '@enonic/nextjs-adapter/ComponentRegistry';
import {commonQuery, commonVariables} from './queries/common';
import PropsView from './views/Props';


import getPerson  from './queries/getPerson';
import {APP_NAME} from '@enonic/nextjs-adapter';

import Person from './views/Person';

import MainPage from './pages/Main';

import TwoColumnLayout from './layouts/TwoColumnLayout';
import MainLayout from './layouts/MainLayout';

import Heading from './parts/Heading';
import ChildList, {childListProcessor, getChildList} from './parts/ChildList';
import MovieDetails, {getMovie} from './parts/MovieDetails';



// You can set common query for all views here
ComponentRegistry.setCommonQuery([commonQuery, commonVariables]);


// Content type mappings
ComponentRegistry.addContentType(`${APP_NAME}:person`, {
    query: getPerson,
    view: PropsView
});

ComponentRegistry.addContentType(`${APP_NAME}:person`, {
    query: getPerson,
    view: Person
});

// Page mappings
ComponentRegistry.addPage(`${APP_NAME}:main`, {
    view: MainPage
});


// Layout mappings
ComponentRegistry.addLayout(`${APP_NAME}:main`, {
    view: MainLayout
});

ComponentRegistry.addLayout(`${APP_NAME}:2-column`, {
    view: TwoColumnLayout
});


// Part mappings
ComponentRegistry.addPart(`${APP_NAME}:child-list`, {
    query: getChildList,
    processor: childListProcessor,
    view: ChildList
});

ComponentRegistry.addPart(`${APP_NAME}:heading`, {
    view: Heading
});

ComponentRegistry.addPart(`${APP_NAME}:movie-details`, {
    query: getMovie,
    view: MovieDetails
});


// Debug
/*
ComponentRegistry.addContentType(CATCH_ALL, {
    view: PropsView
});
*/