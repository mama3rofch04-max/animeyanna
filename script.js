@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

body {
  font-family: "Cairo", sans-serif;
  background-color: #0e0e10;
  color: #fff;
  margin: 0;
  padding: 0;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a1d;
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

header .logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #ff2052;
}

nav a {
  color: #ccc;
  margin: 0 10px;
  text-decoration: none;
  transition: 0.3s;
}

nav a:hover,
nav a.active {
  color: #ff2052;
}

/* Hero section */
.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://i.imgur.com/5bX9R8k.jpg') center/cover no-repeat;
}

.hero h1 {
  font-size: 2.5em;
}

.hero p {
  margin: 10px 0 20px;
}

.btn {
  background-color: #ff2052;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  background-color: #ff5177;
}

/* Anime grid */
.section-title {
  text-align: center;
  margin: 40px 0 20px;
  font-size: 1.8em;
}

.anime-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 0 30px 50px;
}

.anime-card {
  background: #1a1a1d;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
}

.anime-card:hover {
  transform: translateY(-10px);
}

.anime-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.anime-card h3 {
  margin: 10px 0;
}

.watch-btn {
  display: inline-block;
  margin-bottom: 15px;
  background-color: #ff2052;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  text-decoration: none;
  transition: 0.3s;
}

.watch-btn:hover {
  background-color: #ff5177;
}

/* Footer */
footer {
  background: #111;
  text-align: center;
  padding: 15px;
  font-size: 0.9em;
  color: #bbb;
}
