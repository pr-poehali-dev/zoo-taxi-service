import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения поездки.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="PawPrint" className="text-primary" size={32} />
              <span className="text-2xl font-heading font-bold text-foreground">Зоо Такси</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#tariffs" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
              <a href="#how-to-order" className="text-foreground hover:text-primary transition-colors">Как заказать</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Безопасная перевозка ваших питомцев
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное зоо-такси с заботой о комфорте и безопасности животных. Опытные водители, специальное оборудование, контроль качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Заказать поездку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">поездок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">поддержка</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ee46c187-fc3d-48d5-b88d-67ffa4104fc5/files/2c040042-5e95-4867-a6fa-234a332444fc.jpg" 
                alt="Перевозка животных" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для безопасной перевозки всех видов животных
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Car",
                title: "Перевозка в ветклинику",
                description: "Срочная доставка питомца к ветеринару с комфортом и заботой"
              },
              {
                icon: "Home",
                title: "Переезд с питомцем",
                description: "Помощь в перевозке животных при смене места жительства"
              },
              {
                icon: "Plane",
                title: "Трансфер в аэропорт",
                description: "Доставка животных к месту отправления с документами"
              },
              {
                icon: "Heart",
                title: "Выставки и мероприятия",
                description: "Комфортная транспортировка на выставки и соревнования"
              },
              {
                icon: "MapPin",
                title: "Дальние поездки",
                description: "Междугородние перевозки с остановками и уходом"
              },
              {
                icon: "Shield",
                title: "VIP обслуживание",
                description: "Премиум-класс с дополнительным комфортом и сервисом"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Стандарт",
                price: "от 800₽",
                description: "Для небольших животных",
                features: [
                  "Переноска входит в стоимость",
                  "Опытный водитель",
                  "Базовая страховка",
                  "Поездки по городу"
                ]
              },
              {
                name: "Комфорт",
                price: "от 1500₽",
                description: "Для средних питомцев",
                features: [
                  "Все из тарифа Стандарт",
                  "Специальное оборудование",
                  "Расширенная страховка",
                  "Консультация ветеринара"
                ],
                popular: true
              },
              {
                name: "Премиум",
                price: "от 3000₽",
                description: "VIP обслуживание",
                features: [
                  "Все из тарифа Комфорт",
                  "Автомобиль премиум-класса",
                  "Сопровождение зоопсихолога",
                  "Междугородние перевозки"
                ]
              }
            ].map((tariff, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 animate-fade-in ${tariff.popular ? 'border-primary border-2 scale-105' : ''}`}>
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{tariff.name}</CardTitle>
                  <div className="text-4xl font-heading font-bold text-primary mt-2">{tariff.price}</div>
                  <CardDescription className="text-base">{tariff.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={tariff.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Забронировать поездку</h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <Card className="animate-scale-in shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input id="name" placeholder="Иван Петров" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="animal-type">Тип животного *</Label>
                    <Select required>
                      <SelectTrigger id="animal-type">
                        <SelectValue placeholder="Выберите тип животного" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cat">Кошка</SelectItem>
                        <SelectItem value="dog-small">Собака (маленькая, до 10 кг)</SelectItem>
                        <SelectItem value="dog-medium">Собака (средняя, 10-25 кг)</SelectItem>
                        <SelectItem value="dog-large">Собака (крупная, более 25 кг)</SelectItem>
                        <SelectItem value="bird">Птица</SelectItem>
                        <SelectItem value="rodent">Грызун</SelectItem>
                        <SelectItem value="exotic">Экзотическое животное</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="from">Откуда *</Label>
                      <Input id="from" placeholder="Адрес отправления" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to">Куда *</Label>
                      <Input id="to" placeholder="Адрес назначения" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input id="date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время *</Label>
                      <Input id="time" type="time" required />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Дополнительные услуги</Label>
                    <div className="space-y-3">
                      {[
                        { id: "carrier", label: "Переноска (если нет своей) — 200₽" },
                        { id: "vet-consultation", label: "Консультация ветеринара — 500₽" },
                        { id: "waiting", label: "Ожидание и обратная дорога — 400₽/час" },
                        { id: "documents", label: "Помощь с оформлением документов — 800₽" }
                      ].map(service => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox id={service.id} />
                          <label htmlFor={service.id} className="text-sm cursor-pointer">{service.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea id="comment" placeholder="Особые пожелания, информация о поведении животного..." rows={4} />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-to-order" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Как заказать</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой процесс бронирования в 4 шага
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                icon: "FileText",
                title: "Заявка",
                description: "Заполните форму или позвоните нам"
              },
              {
                step: "2",
                icon: "Phone",
                title: "Подтверждение",
                description: "Менеджер связывается с вами за 15 минут"
              },
              {
                step: "3",
                icon: "Car",
                title: "Подача авто",
                description: "Водитель приезжает точно ко времени"
              },
              {
                step: "4",
                icon: "CheckCircle",
                title: "Поездка",
                description: "Комфортная доставка питомца"
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят владельцы питомцев о нашем сервисе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Смирнова",
                pet: "Владелец кошки",
                rating: 5,
                text: "Замечательный сервис! Везли кошку в ветклинику, водитель был очень аккуратен и внимателен. Мурка чувствовала себя спокойно.",
                image: "https://cdn.poehali.dev/projects/ee46c187-fc3d-48d5-b88d-67ffa4104fc5/files/ed5ad4e5-5a7c-4af1-aa43-1841001c75e9.jpg"
              },
              {
                name: "Дмитрий Козлов",
                pet: "Владелец лабрадора",
                rating: 5,
                text: "Переезжали в другой город с крупной собакой. Всё организовали идеально: остановки, вода, комфорт. Рекомендую!",
                image: "https://cdn.poehali.dev/projects/ee46c187-fc3d-48d5-b88d-67ffa4104fc5/files/2c040042-5e95-4867-a6fa-234a332444fc.jpg"
              },
              {
                name: "Елена Петрова",
                pet: "Владелец йорка",
                rating: 5,
                text: "Пользуемся услугами уже 2 года для поездок на выставки. Всегда вовремя, всегда чисто и аккуратно. Спасибо!",
                image: "https://cdn.poehali.dev/projects/ee46c187-fc3d-48d5-b88d-67ffa4104fc5/files/b485e0ed-6a2c-4b1c-b218-138528417a36.jpg"
              }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.pet}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Мы всегда на связи и готовы помочь вашим питомцам
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center animate-scale-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-2">Круглосуточно</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-scale-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary">info@zootaxi.ru</p>
                  <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-scale-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading">Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary">Москва</p>
                  <p className="text-sm text-muted-foreground mt-2">Работаем по всему городу</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="PawPrint" className="text-primary" size={32} />
                <span className="text-2xl font-heading font-bold">Зоо Такси</span>
              </div>
              <p className="text-white/70">
                Безопасная перевозка животных с 2019 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Перевозка в ветклинику</li>
                <li>Переезд с питомцем</li>
                <li>Трансфер в аэропорт</li>
                <li>VIP обслуживание</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/70">
                <li>О компании</li>
                <li>Тарифы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@zootaxi.ru</li>
                <li>Москва, работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2024 Зоо Такси. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
