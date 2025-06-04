import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Icon
              name="Heart"
              size={64}
              className="text-blue-600 mx-auto mb-4"
            />
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">Хитонал</h1>

          <p className="text-xl text-gray-700 mb-4 font-medium">
            Ветеринарная кормовая добавка для домашних плотоядных
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Специализированная формула на основе хитозана для поддержки кошек и
            собак с хроническими заболеваниями почек. Помогает улучшить качество
            жизни питомцев.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Download" size={20} />
              Скачать инструкцию
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Phone" size={20} />
              Связаться с экспертом
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/70 rounded-lg p-6 shadow-sm">
              <Icon
                name="Shield"
                size={40}
                className="text-green-600 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                100% Безопасно
              </h3>
              <p className="text-sm text-gray-600">Сертифицированная формула</p>
            </div>
            <div className="bg-white/70 rounded-lg p-6 shadow-sm">
              <Icon
                name="TrendingUp"
                size={40}
                className="text-blue-600 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                Доказанная эффективность
              </h3>
              <p className="text-sm text-gray-600">Клинические исследования</p>
            </div>
            <div className="bg-white/70 rounded-lg p-6 shadow-sm">
              <Icon
                name="Award"
                size={40}
                className="text-green-600 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                Экспертное качество
              </h3>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
