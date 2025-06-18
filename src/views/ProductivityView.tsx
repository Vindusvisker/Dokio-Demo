import HabitTracker from '@/components/productivity/HabitTracker';
import FocusTimer from '@/components/productivity/FocusTimer';
import WeeklyOverview from '@/components/productivity/WeeklyOverview';
import { UserConfig } from '../types/UserConfig'

interface ProductivityViewProps {
  userConfig?: UserConfig | null
}

const ProductivityView: React.FC<ProductivityViewProps> = ({ userConfig }) => {
  return (
    <div className="min-h-screen overflow-auto relative">
      {/* Responsive padding and spacing - much tighter on smaller screens */}
      <div className="h-full pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 md:pb-8 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-7xl h-full flex flex-col">

          {/* Main Productivity Grid - Keep 2-column layout on all sizes, just smaller containers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 flex-1 min-h-0">
            
            {/* Left Column */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 min-h-0">
              {/* HabitTracker - First to appear */}
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <HabitTracker />
              </div>
              
              {/* FocusTimer - Second to appear */}
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <FocusTimer />
              </div>
            </div>

            {/* Right Column */}
            <div className="min-h-0">
              {/* WeeklyOverview - Third to appear */}
              <div className="opacity-0 animate-fade-in-up h-full" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <WeeklyOverview userConfig={userConfig} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductivityView; 