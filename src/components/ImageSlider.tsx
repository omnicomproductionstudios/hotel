import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  // Get the three visible cards (prev, current, next)
  const getVisibleCards = () => {
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    const nextIndex = (activeIndex + 1) % images.length;

    return [
      { ...images[prevIndex], position: 'left', index: prevIndex },
      { ...images[activeIndex], position: 'center', index: activeIndex },
      { ...images[nextIndex], position: 'right', index: nextIndex },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Image Counter */}
      <div className="text-center mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center gap-4 md:gap-6 py-8">
        {/* Navigation Button - Left */}
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="absolute left-0 md:left-4 z-20 rounded-full bg-card/95 backdrop-blur-sm border-border/50 hover:bg-card shadow-medium hover:scale-110 transition-transform"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Cards Container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-6xl">
          {visibleCards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.index)}
              className={cn(
                "relative overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-out cursor-pointer",
                card.position === 'center'
                  ? "w-full md:w-[55%] aspect-[16/10] scale-100 z-10 shadow-large"
                  : "w-[35%] md:w-[25%] aspect-[16/10] scale-90 opacity-60 hover:opacity-80 hover:scale-95"
              )}
            >
              <img
                src={card.src}
                alt={card.alt}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-300",
                  card.position === 'center' ? "" : "hover:scale-105"
                )}
              />
              
              {/* Overlay for side cards */}
              {card.position !== 'center' && (
                <div className="absolute inset-0 bg-background/10 pointer-events-none" />
              )}
            </button>
          ))}
        </div>

        {/* Navigation Button - Right */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="absolute right-0 md:right-4 z-20 rounded-full bg-card/95 backdrop-blur-sm border-border/50 hover:bg-card shadow-medium hover:scale-110 transition-transform"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              activeIndex === index
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
