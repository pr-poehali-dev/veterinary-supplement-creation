import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Heart",
      title: "Поддержка функции почек",
      description:
        "Хитозан связывает токсины и снижает нагрузку на почки, улучшая их работу",
      color: "text-blue-600",
    },
    {
      icon: "Shield",
      title: "Снижение уремических токсинов",
      description:
        "Эффективно связывает и выводит вредные вещества из организма питомца",
      color: "text-green-600",
    },
    {
      icon: "TrendingDown",
      title: "Контроль фосфора",
      description:
        "Карбонат кальция в составе помогает контролировать уровень фосфора в крови",
      color: "text-purple-600",
    },
    {
      icon: "Star",
      title: "Улучшение аппетита",
      description:
        "Ароматизатор печени делает добавку привлекательной для кошек и собак",
      color: "text-orange-600",
    },
    {
      icon: "Activity",
      title: "Повышение качества жизни",
      description:
        "Комплексное воздействие способствует улучшению самочувствия питомца",
      color: "text-red-500",
    },
    {
      icon: "Clock",
      title: "Замедление прогрессирования",
      description:
        "Регулярное применение помогает замедлить развитие хронической болезни почек",
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
