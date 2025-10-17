import '@mantine/core/styles.css';
import './App.css'

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Button, Container, MantineProvider, Avatar, Card, Text, Title, Stack} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useState, useRef } from 'react';



export default function App() {


  const passions = [
    {
  image: '/images/passions/musique.jpg',
  title: 'La musique',
  text: 'Depuis petit, mes parents m’ont transmis leur passion pour la musique, surtout le Rock et le Metal. Cela me permet de sauter, danser et me plonger dans un autre monde à chaque écoute, ou de me défouler pendant les concerts.ATTENTION le son peut être fort !',
  audio: 'audio/metal.mp3',
},
{
  image: '/images/passions/sport.jpg',
  title: 'Le sport',
  text: 'Je pratique beaucoup de sport, notamment le badminton depuis 10 ans, mais aussi la course à pied et le vélo. Ces sports me permettent de me sentir libre et d’accomplir des objectifs fous comme récemment mon voyage de 500 km à vélo en totale autonomie sur 5 jours.J\'essaye aussi au maximum de faire de la randonnée pour voir de nouveaux paysages et me ressourcer en pleine nature.',
},
{
  image: '/images/passions/animaux.jpg',
  title: 'Les animaux',
  text: 'J’aime beaucoup découvrir et comprendre le monde qui m’entoure, et les animaux me fascinent. J’adore découvrir de nouvelles espèces et comprendre comment elles ont réussi à s’adapter à leur environnement. C’est pourquoi je me suis inscrit à la WWF. L\'animale présent sur la photo est un rhinopothèque brun qui est un singe vivant dans des montagne d\'Asie du Sud-Est.Pour se réchauffer, il se font des câlins en groupe !',
},
{
  image: '/images/passions/jeux.png',
  title: 'Les jeux vidéo',
  text: 'Les jeux vidéo me permettent de relever des défis ou simplement me détendre. Mais il est aussi un moyen de socialiser et de partager des moments avec mes amis, chaque soir nous nous retrouvons en ligne pour jouer ensemble et c\'est ce qui à forgé notre amitié au fil des années.',
},
{
  image: '/images/passions/dessin.jpg',
  title: 'Le dessin et l’art',
  text: 'Le dessin est un moyen pour moi d’exprimer toutes les idées qui traversent mon esprit. Je trouve le dessin, le cinéma et l’écriture magnifiques, car ils permettent de transmettre ce qui se cache en nous et de nous faire voyager dans d’autres mondes.',
},

  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (src: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
  <MantineProvider>{
    <div className="style">
      <nav className="navbar">
        <Avatar variant="filled" radius="xs" size="lg" src="/images/logo/MyLogo.png" id="MyLogo" />
        <Container className="containTravel" bg="var(--mantine-color-yellow-light)">
          <div className='Travel'><Button variant="subtle" color="white" size="md" radius="md" onClick={() => scrollToSection('Moi')}>Moi</Button></div>
          <div className="Travel"><Button variant="subtle" color="white" size="md" radius="md" onClick={() => scrollToSection('Passion')}>Mes Passions</Button></div>
          <div className='Travel'><Button variant="subtle" color="white" size="md" radius="md" onClick={() => scrollToSection('Bulle')}>Ma Bulle</Button></div>
        </Container>
      </nav>
      <Container id="Moi" size="md" mt="xl">
          <Card
            shadow="sm"
            radius="lg"
            padding="lg"
            withBorder
            style={{
              backgroundColor: 'var(--mantine-color-yellow-light)',
              borderColor: 'var(--mantine-color-yellow-light)',
              textAlign: 'center',
              color: 'var(--mantine-color-dark)',
            }}
          >
            <Stack align="center" gap="sm">
              <Avatar
                src="/images/Moi/moi.jpg"
                alt="Photo de moi"
                radius="xl"
                size={120}
                mb="sm"
              />
              <Title order={2}>Bonjour et Bienvenue sur mon site</Title>
                            <Text size="md" maw={400}>
                Je m'appelle Axel, j'ai 21 ans et je suis Français.
              </Text>
              <Text size="md" maw={400}>
                J'habite à Triel-sur-Seine, une petite ville non loin de Cergy.  
                C'est ici que je me suis construit.
              </Text>
              <Text size="md" maw={400}>
                J'ai décidé de faire ce site pour vous faire découvrir mon univers et ma culture.
              </Text>
              <Text size="xl" maw={400}>
                Donc bienvenue :)
              </Text>

            </Stack>
          </Card>
        </Container>

        <Container id="Passion" size="lg" mt={100}>
      <Title order={2} ta="center" mb="xl">
        Mes Passions
      </Title>

      <Carousel
  slideSize="50%"
  height={550}
  slideGap="lg"
  controlsOffset="sm"
  emblaOptions={{ align: 'start' }}
  withIndicators
>
        {passions.map((passion, index) => (
  <Carousel.Slide key={index}>
    <Card
      shadow="md"
      radius="lg"
      padding="md"
      style={{
        backgroundColor: 'var(--mantine-color-yellow-light)',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <img
        src={passion.image}
        alt={passion.title}
        style={{
          borderRadius: '16px',
          objectFit: 'cover',
          width: '100%',
          height: '230px',
          marginBottom: '12px',
        }}
      />

      <div>
        <Title order={3} style={{ color: 'white' }}>{passion.title}</Title>
        <Text size="sm" mt="xs" px="sm" style={{ color: 'white' }}>
          {passion.text}
        </Text>

        {/* Bouton uniquement pour la musique */}
        {passion.audio && (
          <Button
            color="dark"
            mt="md"
            onClick={() => toggleAudio(passion.audio)}
          >
            {isPlaying ? 'Pause' : 'Écouter'}
          </Button>
        )}
      </div>
    </Card>
  </Carousel.Slide>
))}

      </Carousel>
    </Container>

   <Container id="Bulle" size="lg" mt={200} ta="center">
  <Title order={2} mb="xl">
    Ma Bulle
  </Title>

  <div className="bubble-row">
    <div className="bubble blue">
      <Text className="bubble-text">
        Pour revenir à ma culture,<br />
        je pense pouvoir le dire :<br />
        je vis dans une bulle<br />
        où j’évite les pensées négatives.<br />
        J’apprécie les petites choses de la vie<br />
        et je profite de chaque instant.
      </Text>
    </div>

    <div className="bubble white">
      <Text className="bubble-text">
        Je n’aime pas parler de politique ou de religion.<br />
        Je ne pense pas souvent au futur.<br />
        Je préfère me concentrer sur le moment présent.<br />
        Je suis quelqu’un de très positif<br />
        et j’aime voir le bon côté des choses.
      </Text>
    </div>

    <div className="bubble red">
      <Text className="bubble-text">
        Je pense qu’il est important de vivre sa vie<br />
        sans se soucier du regard des autres.<br />
        C’est pour cela que j’ai fait ce site<br />
        pour vous faire découvrir mon univers et ma culture.<br />
        Enfin, je ne suis pas sûr d’avoir compris la consigne…<br />
        mais voici qui je suis :)
      </Text>
    </div>
  </div>
</Container>



    </div>
    }</MantineProvider>
  );
}
