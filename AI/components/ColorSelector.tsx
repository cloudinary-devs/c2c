'use client';

// const COLORS = [
//   { name: 'Default', value: 'default', hex: null },
//   { name: 'Lavender', value: 'lavender', hex: '#E6E6FA' },
//   { name: 'Pink', value: 'pink', hex: '#FFB6C1' },
//   { name: 'Peach', value: 'peach', hex: '#FFDAB9' },
//   { name: 'Sky Blue', value: 'skyblue', hex: '#B0E0E6' },
//   { name: 'Mint', value: 'mint', hex: '#B4F8C8' },
// ];

interface ColorSelectorProps {
  selectedColor: string | null;
  onColorChangeAction: (hex: string | null) => void;
}

export default function ColorSelector({
  selectedColor,
  onColorChangeAction,
}: ColorSelectorProps) {
  return (
    <section aria-labelledby="color-heading" className="space-y-3">
      <h2 id="color-heading" className="text-lg font-bold text-gray-700">
        Available Colors
      </h2>
      <div className="flex gap-3" role="radiogroup" aria-labelledby="color-heading">
        {COLORS.map((color) => (
          <button
            key={color.value}
            role="radio"
            aria-checked={selectedColor === color.hex}
            aria-label={color.name}
            onClick={() => onColorChangeAction(color.hex)}
            className={`relative w-10 h-10 rounded-full transition-all duration-200 focus:outline-none hover:cursor-pointer focus:ring-4 focus:ring-purple-300 ${
              selectedColor === color.hex
                ? 'ring-4 ring-offset-2 ring-gray-800 scale-110'
                : 'hover:scale-105'
            } ${color.hex ? '' : 'bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-400'}`}
            style={color.hex ? { backgroundColor: color.hex } : {}}
            title={color.name}
          >
            {selectedColor === color.hex && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white drop-shadow-lg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
