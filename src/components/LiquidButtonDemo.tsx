import React from 'react';
import { LiquidButton, MetalButton } from './ui/liquid-glass-button';

export default function LiquidButtonDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Liquid Glass Button Demo</h1>
      
      {/* Basic Liquid Button */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold text-white">Liquid Glass Button</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <LiquidButton>Default</LiquidButton>
          <LiquidButton variant="destructive">Destructive</LiquidButton>
          <LiquidButton variant="outline">Outline</LiquidButton>
          <LiquidButton variant="secondary">Secondary</LiquidButton>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold text-white">Different Sizes</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <LiquidButton size="sm">Small</LiquidButton>
          <LiquidButton size="default">Default</LiquidButton>
          <LiquidButton size="lg">Large</LiquidButton>
          <LiquidButton size="xl">Extra Large</LiquidButton>
          <LiquidButton size="xxl">2X Large</LiquidButton>
        </div>
      </div>

      {/* Metal Buttons */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold text-white">Metal Buttons</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <MetalButton>Default</MetalButton>
          <MetalButton variant="primary">Primary</MetalButton>
          <MetalButton variant="success">Success</MetalButton>
          <MetalButton variant="error">Error</MetalButton>
          <MetalButton variant="gold">Gold</MetalButton>
          <MetalButton variant="bronze">Bronze</MetalButton>
        </div>
      </div>

      {/* With Icons */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-semibold text-white">With Icons</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <LiquidButton className="flex items-center space-x-2">
            <span>🚀</span>
            <span>Launch</span>
          </LiquidButton>
          <LiquidButton variant="outline" className="flex items-center space-x-2">
            <span>📱</span>
            <span>Mobile</span>
          </LiquidButton>
          <LiquidButton variant="secondary" className="flex items-center space-x-2">
            <span>💡</span>
            <span>Ideas</span>
          </LiquidButton>
        </div>
      </div>
    </div>
  );
}