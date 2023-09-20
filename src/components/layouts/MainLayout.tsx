import React from 'react'
import {LayoutProps} from '@enonic/nextjs-adapter/views/BaseLayout';
import {RegionView} from '@enonic/nextjs-adapter/views/Region';
import styles from './MainLayout.module.css';

const MainLayout = (props: LayoutProps) => {
    const regions = props.layout.regions;
    const {common, meta} = props;

    return (
        <>
            <div className={styles.row}>
                <RegionView name="name" components={regions['main']?.components} common={common} meta={meta}/>
            </div>
        </>
    );
};

export default MainLayout;