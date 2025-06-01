import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const UsageSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Инструкция по применению
          </h2>
          <p className="text-lg text-gray-600">
            Рекомендации по дозировке и схеме применения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Дозировка */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Calculator" size={24} className="text-blue-600" />
                Дозировка
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Собаки и кошки:</h4>
                <p className="text-gray-600">0,1-0,2 г на 1 кг массы тела</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Крупный рогатый скот:
                </h4>
                <p className="text-gray-600">2-5 г на голову в сутки</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Свиньи:</h4>
                <p className="text-gray-600">1-3 г на голову в сутки</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Птица:</h4>
                <p className="text-gray-600">0,5-1 г на 1 кг корма</p>
              </div>
            </CardContent>
          </Card>

          {/* Схема применения */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Calendar" size={24} className="text-green-600" />
                Схема применения
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Профилактика</h4>
                  <p className="text-gray-600 text-sm">7-10 дней ежемесячно</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Лечение</h4>
                  <p className="text-gray-600 text-sm">14-21 день непрерывно</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Реабилитация</h4>
                  <p className="text-gray-600 text-sm">
                    10-14 дней после болезни
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    className="text-yellow-600 mt-0.5"
                  />
                  <div>
                    <h5 className="font-semibold text-yellow-800">Важно:</h5>
                    <p className="text-sm text-yellow-700">
                      Перед применением обязательно проконсультируйтесь с
                      ветеринарным врачом
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
