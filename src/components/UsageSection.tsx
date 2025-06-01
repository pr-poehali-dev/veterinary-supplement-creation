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
            Рекомендации по дозировке для кошек и собак с хроническими
            заболеваниями почек
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Состав */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Pill" size={24} className="text-blue-600" />
                Состав добавки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Хитозан</h4>
                <p className="text-gray-600">Основное действующее вещество</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Карбонат кальция
                </h4>
                <p className="text-gray-600">Связывает фосфор в кишечнике</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Лактоза</h4>
                <p className="text-gray-600">Вспомогательное вещество</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Ароматизатор печени
                </h4>
                <p className="text-gray-600">Улучшает вкусовые качества</p>
              </div>
            </CardContent>
          </Card>

          {/* Дозировка */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Calculator" size={24} className="text-green-600" />
                Дозировка и применение
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  🐱
                </div>
                <div>
                  <h4 className="font-semibold">Кошки</h4>
                  <p className="text-gray-600 text-sm">
                    0,1-0,2 г на 1 кг массы тела в сутки
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  🐕
                </div>
                <div>
                  <h4 className="font-semibold">Собаки</h4>
                  <p className="text-gray-600 text-sm">
                    0,1-0,2 г на 1 кг массы тела в сутки
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  ⏰
                </div>
                <div>
                  <h4 className="font-semibold">Курс применения</h4>
                  <p className="text-gray-600 text-sm">
                    Длительное применение по назначению врача
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    className="text-red-600 mt-0.5"
                  />
                  <div>
                    <h5 className="font-semibold text-red-800">Важно:</h5>
                    <p className="text-sm text-red-700">
                      Применять только по назначению ветеринарного врача при
                      подтвержденном диагнозе ХБП
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
