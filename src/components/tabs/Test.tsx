import { Tabs, Tab, Button } from "react-bootstrap";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

interface PropElements {
    selectedTabs?: Array<TabObj>;
    handleTabClose: Function;
}

const Test = ({ selectedTabs, handleTabClose }: PropElements) => {
    const getComponent = (value: number) => {
        switch (value) {
            case 1:
                return <Tab1 heading="Tab 1 prop" />;
            case 2:
                return <Tab2 />;
            case 3:
                return <Tab3 />;
            case 4:
                return <Tab4 />;

            default:
                break;
        }
    };

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            {selectedTabs?.map((tab) => (
                <Tab
                    eventKey={`${tab.value}`}
                    title={
                        <>
                            {tab.name}
                            <Button variant="link" onClick={() => handleTabClose(tab)}>
                                X
                            </Button>
                        </>
                    }
                >{getComponent(tab.value)}</Tab>
            ))}
        </Tabs>
    );
};

export default Test;
