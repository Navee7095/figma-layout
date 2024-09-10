import React from 'react';
import 'antd/dist/reset.css'; // Ant Design's CSS reset
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Left side: Empty on larger screens */}
      <div className="hidden md:block md:w-1/2"></div>

      {/* Right side: Tabs and Gallery */}
      <div className="w-full md:w-1/2 p-4 space-y-4">
        {/* Tabs widget */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Tabs defaultActiveKey="1">
            <TabPane tab="About Me" key="1">
              <p>
                Hi! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...
              </p>
            </TabPane>
            <TabPane tab="Experiences" key="2">
              <p>My Experiences content...</p>
            </TabPane>
            <TabPane tab="Recommended" key="3">
              <p>Recommended content...</p>
            </TabPane>
          </Tabs>
        </div>

        {/* Gallery widget */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Gallery</h2>
            <Button type="primary">+ Add Image</Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://via.placeholder.com/150" alt="Gallery item" className="rounded-lg" />
            <img src="https://via.placeholder.com/150" alt="Gallery item" className="rounded-lg" />
            <img src="https://via.placeholder.com/150" alt="Gallery item" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
