import React, { useState } from 'react';
import { GlowingEffectDemo } from '../components/ui/glowing-effect-demo';
import { SimpleGlowTest } from '../components/ui/simple-glow-test';

function GlowingEffectTest() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setShowDemo(!showDemo)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            {showDemo ? 'Show Simple Test' : 'Show Full Demo'}
          </button>
        </div>
        {showDemo ? <GlowingEffectDemo /> : <SimpleGlowTest />}
      </div>
    </div>
  );
}

export default GlowingEffectTest;