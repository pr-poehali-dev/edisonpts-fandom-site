import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const videos = [
    {
      id: 1,
      title: "Выживание в майнкрафт с модами",
      thumbnail:
        "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2070&auto=format&fit=crop",
      views: "124K",
      date: "2 недели назад",
    },
    {
      id: 2,
      title: "Стрим: отвечаю на вопросы фанатов",
      thumbnail:
        "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=2071&auto=format&fit=crop",
      views: "98K",
      date: "1 месяц назад",
    },
    {
      id: 3,
      title: "Обзор новых игр 2025 года",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
      views: "256K",
      date: "3 дня назад",
    },
  ];

  const fanArts = [
    {
      id: 1,
      title: "EdisonPTS в стиле аниме",
      author: "MoonArtist",
      image:
        "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Геймерский сетап",
      author: "TechArtGallery",
      image:
        "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Фан-арт из майнкрафта",
      author: "CubicCreator",
      image:
        "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=2069&auto=format&fit=crop",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Встреча с фанатами",
      date: "28 мая 2025",
      location: "Москва",
      description: "Автограф-сессия и фотографирование с фанатами",
    },
    {
      id: 2,
      title: "Турнир по Minecraft",
      date: "15 июня 2025",
      location: "Онлайн",
      description: "Соревнуйтесь с другими фанатами и выиграйте призы",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-red-50">
      {/* Шапка */}
      <header className="bg-red-900 text-white py-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-red-400" size={24} />
            <h1 className="text-xl font-bold">EdisonPTS</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-red-300 transition">
              О блогере
            </a>
            <a href="#content" className="hover:text-red-300 transition">
              Контент
            </a>
            <a href="#community" className="hover:text-red-300 transition">
              Сообщество
            </a>
            <a href="#events" className="hover:text-red-300 transition">
              События
            </a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <main>
        {/* Секция-герой */}
        <section id="about" className="bg-red-900 text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">EdisonPTS</h1>
              <p className="text-lg mb-6">
                Популярный контент-мейкер и стример, известный своими
                увлекательными летсплеями, обзорами игр и взаимодействием с
                аудиторией.
              </p>
              <div className="flex gap-4 mb-6">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Icon name="Youtube" className="mr-2" size={16} />
                  Подписаться
                </Button>
                <Button
                  variant="outline"
                  className="border-red-400 text-red-400"
                >
                  <Icon name="Twitch" className="mr-2" size={16} />
                  Twitch
                </Button>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-3xl font-bold">2.4M+</p>
                  <p className="text-red-200">Подписчиков</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">780+</p>
                  <p className="text-red-200">Видео</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">7+</p>
                  <p className="text-red-200">Лет опыта</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red-500 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
                  alt="EdisonPTS"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секция контента */}
        <section id="content" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-900">
              Контент EdisonPTS
            </h2>

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "videos"
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  } 
                    border border-gray-200 rounded-l-lg`}
                >
                  Видео
                </button>
                <button
                  onClick={() => setActiveTab("streams")}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "streams"
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  } 
                    border-t border-r border-b border-gray-200 rounded-r-lg`}
                >
                  Стримы
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow border-red-200"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.views} просмотров
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="pt-0 text-sm text-gray-500 flex justify-between">
                    <span>{video.date}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                Смотреть больше{" "}
                <Icon name="ChevronRight" className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* Секция фан-арта */}
        <section id="community" className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-900">
              Фан-арт сообщества
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fanArts.map((art) => (
                <Card
                  key={art.id}
                  className="overflow-hidden group border-red-200"
                >
                  <div className="relative aspect-square">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold">{art.title}</h3>
                      <p className="text-red-100">Автор: {art.author}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button className="bg-red-600 hover:bg-red-700">
                Поделиться своим творчеством
              </Button>
            </div>
          </div>
        </section>

        {/* Секция событий */}
        <section id="events" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-900">
              Предстоящие события
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {events.map((event) => (
                <Card key={event.id} className="border-l-4 border-l-red-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </div>
                      <div className="bg-red-50 px-3 py-2 rounded-md text-center">
                        <div className="font-bold text-red-600">
                          {event.date.split(" ")[0]}
                        </div>
                        <div className="text-xs">
                          {event.date.split(" ")[1]}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Icon name="MapPin" size={16} />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    >
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Секция подписки */}
        <section className="py-16 bg-red-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Присоединяйся к сообществу
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Будь в курсе всех новостей, получай уведомления о новых видео и
              стримах, участвуй в эксклюзивных событиях.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-[#FF0000] hover:bg-red-700">
                <Icon name="Youtube" className="mr-2" size={16} />
                YouTube
              </Button>
              <Button className="bg-[#6441A4] hover:bg-purple-800">
                <Icon name="Twitch" className="mr-2" size={16} />
                Twitch
              </Button>
              <Button className="bg-[#7289DA] hover:bg-indigo-600">
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Discord
              </Button>
              <Button className="bg-[#1DA1F2] hover:bg-blue-500">
                <Icon name="Twitter" className="mr-2" size={16} />
                Twitter
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-red-900 text-white py-8 border-t border-red-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Zap" className="text-red-400" size={24} />
              <h1 className="text-xl font-bold">EdisonPTS</h1>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-300 transition">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="hover:text-red-300 transition">
                <Icon name="Twitch" size={20} />
              </a>
              <a href="#" className="hover:text-red-300 transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-red-300 transition">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-red-300 transition">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-red-800 mt-6 pt-6 text-center text-red-200 text-sm">
            <p>© 2025 Фан-сайт EdisonPTS. Создан с ❤️ для сообщества.</p>
            <p className="mt-2">
              Этот сайт не является официальным сайтом блогера и создан
              фанатами.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
