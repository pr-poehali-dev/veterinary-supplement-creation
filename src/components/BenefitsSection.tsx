import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Укрепление иммунитета",
      description:
        "Повышает естественную сопротивляемость организма к инфекциям и заболеваниям",
      color: "text-green-600",
    },
    {
      icon: "Zap",
      title: "Улучшение пищеварения",
      description:
        "Нормализует микрофлору кишечника и повышает усвояемость питательных веществ",
      color: "text-blue-600",
    },
    {
      icon: "Heart",
      title: "Общее укрепление здоровья",
      description:
        "Улучшает обмен веществ, повышает энергию и жизненный тонус животных",
      color: "text-red-500",
    },
    {
      icon: "Activity",
      title: "Быстрое восстановление",
      description:
        "Ускоряет реабилитацию после болезней, стрессов и медицинских процедур",
      color: "text-purple-600",
    },
    {
      icon: "Star",
      title: "Улучшение качества шерсти",
      description:
        "Делает шерсть более блестящей, здоровой и устойчивой к выпадению",
      color: "text-yellow-600",
    },
    {
      icon: "Target",
      title: "Точная дозировка",
      description:
        "Удобная форма применения с точным контролем дозировки для каждого животного",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Преимущества Хитонала
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Комплексное воздействие на организм животного для достижения
            максимального терапевтического эффекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <Icon
                  name={benefit.icon as any}
                  size={48}
                  className={`mx-auto mb-4 ${benefit.color}`}
                />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
