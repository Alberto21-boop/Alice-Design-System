import React, { useState } from 'react';
import { AliTabsContainer, TabButton, TabContent } from './styles';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface AliTabsProps {
    tabs: Tab[];
    themeColor: 'blue' | 'green' | 'alert-red' | 'gray-dark' | 'purple' | 'pink' | 'yellow' | 'orange' | 'alice-blue' | 'yellow-soft' | 'yellow-bright' | 'charcoal' | 'slate' | 'onyx';
}

const AliTabs: React.FC<AliTabsProps> = ({ tabs, themeColor }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <AliTabsContainer>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        isActive={activeTab === index}
                        themeColor={themeColor}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </AliTabsContainer>

            {/* Exibe o conteúdo da aba ativa */}
            <TabContent>
                {tabs[activeTab].content}
            </TabContent>
        </div>
    );
};

export default AliTabs;
