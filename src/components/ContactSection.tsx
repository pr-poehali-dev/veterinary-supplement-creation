import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-blue-100">
            Профессиональная поддержка ветеринарных специалистов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Icon
                name="Phone"
                size={40}
                className="text-blue-300 mx-auto mb-3"
              />
              <CardTitle>Горячая линия</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-bold mb-2">8-800-XXX-XX-XX</p>
              <p className="text-blue-200">Бесплатно по России</p>
              <p className="text-sm text-blue-200 mt-2">Пн-Пт: 9:00-18:00</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Icon
                name="Mail"
                size={40}
                className="text-green-300 mx-auto mb-3"
              />
              <CardTitle>Email поддержка</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold mb-2">info@chitonal.ru</p>
              <p className="text-blue-200">Ответ в течение 24 часов</p>
              <Button
                variant="outline"
                className="mt-3 bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
              >
                Написать
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Icon
                name="MapPin"
                size={40}
                className="text-purple-300 mx-auto mb-3"
              />
              <CardTitle>Региональные представители</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 mb-3">Консультации в вашем регионе</p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Icon name="Search" size={16} />
                Найти представителя
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">
              Для ветеринарных клиник
            </h3>
            <p className="text-blue-100 mb-4">
              Специальные условия поставки и профессиональная поддержка для
              ветеринарных учреждений
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Icon name="Building" size={20} />
              Партнерская программа
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
