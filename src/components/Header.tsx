import React, { useState } from 'react';
import { Settings, Palette, HelpCircle } from 'lucide-react';
import Navigation from './Navigation';
import StarButton from './StarButton';
import DownloadButton from './DownloadButton';
import HomeHelp from './HomeHelp';
import ProductivityHelp from './ProductivityHelp';
import PersonalHelp from './PersonalHelp';
import VisionHelp from './VisionHelp';
import FinancialHelp from './FinancialHelp';
import { UserConfig } from '../types/UserConfig';

type ViewType = 'home' | 'productivity' | 'personal' | 'vision' | 'financial';

interface HeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  currentTheme: {
    id: string;
    name: string;
    description: string;
    backgroundColor: string;
    gradientSpots: string[];
    grainOpacity: number;
    grainColors: string;
  };
  onSettingsClick: () => void;
  onThemeGalleryClick: () => void;
  userConfig?: UserConfig | null;
}

const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  currentTheme,
  onSettingsClick,
  onThemeGalleryClick,
  userConfig
}) => {
  const [helpComponentRef, setHelpComponentRef] = useState<{ openModal: () => void } | null>(null);

  const getHelpTitle = () => {
    switch (currentView) {
      case 'home':
        return 'How Home Works';
      case 'productivity':
        return 'How Productivity Works';
      case 'personal':
        return 'How Personal Works';
      case 'vision':
        return 'How Vision Works';
      case 'financial':
        return 'How Financial Works';
      default:
        return 'Help';
    }
  };

  const handleHelpClick = () => {
    // Find and click the help button
    const helpButtons = document.querySelectorAll('button');
    Array.from(helpButtons).forEach(button => {
      const text = button.textContent;
      if (text && text.includes('How') && text.includes('Works')) {
        button.click();
        return;
      }
    });
  };

  const renderHelpComponent = () => {
    const commonProps = {
      style: { position: 'fixed' as const, left: '-9999px', top: '-9999px', visibility: 'hidden' as const }
    };
    
    switch (currentView) {
      case 'home':
        return <div {...commonProps}><HomeHelp /></div>;
      case 'productivity':
        return <div {...commonProps}><ProductivityHelp /></div>;
      case 'personal':
        return <div {...commonProps}><PersonalHelp /></div>;
      case 'vision':
        return <div {...commonProps}><VisionHelp userConfig={userConfig} /></div>;
      case 'financial':
        return <div {...commonProps}><FinancialHelp /></div>;
      default:
        return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Main Header Container */}
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-1.5">
          <StarButton />
          <DownloadButton />
        </div>

        {/* Center - Navigation */}
        <div className="flex-1 flex justify-center">
          <Navigation 
            currentView={currentView} 
            onViewChange={onViewChange} 
            currentTheme={currentTheme} 
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Settings, Theme Picker and Help Button - Closer together */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onSettingsClick}
              className="flex items-center gap-2 px-3 py-1.5 bg-black/20 hover:bg-black/30 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 group"
            >
              <Settings className="w-4 h-4 text-white/70 group-hover:text-white/90 transition-colors" />
              <span className="text-sm text-white/80 group-hover:text-white/90 font-medium transition-colors">Settings</span>
            </button>
            
            <button
              onClick={onThemeGalleryClick}
              className="flex items-center gap-2 px-3 py-1.5 bg-black/20 hover:bg-black/30 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 group"
            >
              <Palette className="w-4 h-4 text-white/70 group-hover:text-white/90 transition-colors" />
              <span className="text-sm text-white/80 group-hover:text-white/90 font-medium transition-colors">{currentTheme.name}</span>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
            </button>

            {/* Help Button - Just question mark icon */}
            <button
              onClick={handleHelpClick}
              className="flex items-center justify-center px-3 py-1.5 bg-black/20 hover:bg-black/30 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 group"
              title={getHelpTitle()}
            >
              <HelpCircle className="w-4 h-4 text-white/70 group-hover:text-white/90 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Second Row - Demo Mode Indicator positioned under right side */}
      <div className="w-full px-6 pb-2 flex items-center justify-end">
        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-xl backdrop-blur-xl border border-white/20">
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-white/90">Demo</span>
        </div>
      </div>

      {/* Hidden help components for interaction */}
      {renderHelpComponent()}
    </header>
  );
};

export default Header; 