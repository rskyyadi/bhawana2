import React, { useState, useEffect } from 'react'
import { Card, Nav } from 'react-bootstrap'
import {
    ApprovalKegiatan,
    HistoryApprovalKegiatan
} from './Tabs'

const MainApprovalKegiatan = ({ setNavbarTitle }) => {
//USE EFFECT
    useEffect(() => {
        setNavbarTitle('Approval Kegiatan')
    }, [setNavbarTitle])
//TAB NAVBAR DATA
    const TableSection = () => {
        const [tabs, setTabs] = useState('approval')
        const tabsConfig = [
            {
                label: 'Approval',
                tab: 'approval',
                component: () => <ApprovalKegiatan />
            },
            {
                label: 'History',
                tab: 'history',
                component: () => <HistoryApprovalKegiatan />
            }
        ]
        const onTabsChangeHandler = (e, newPage) => {
            e.preventDefault()
            setTabs(newPage)
        }
        useEffect(() => {
            setTabs(tabsConfig[0].tab)
        }, [])
    // TAB NAVBAR
        const TabsNav = ({ tab, label }) => (
            <Nav.Item>
                <Nav.Link
                  href={`#${tab}`}
                  onClick={e => onTabsChangeHandler(e, tab)}>

                  {label}
                </Nav.Link>
            </Nav.Item>
        )
        return (
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey={`#${tabs}`}>
                        {tabsConfig.map((val, index) => <TabsNav key={index} tab={val.tab} label={val.label} />)}
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {tabsConfig.map(({ tab, component: Component }, index) => tab === tabs && <Component key={index} />)}
                </Card.Body>
            </Card>
        )
    }
    //LAYOUT
    return (
        <TableSection />
    )
}

export default MainApprovalKegiatan
