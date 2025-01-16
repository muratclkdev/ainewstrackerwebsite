export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Hakkımızda</h1>
      <div className="prose max-w-none">
        <p className="mb-6">
          AI News Tracker, yapay zeka teknolojilerini kullanarak haber takibini ve analizini 
          kolaylaştırmayı amaçlayan yenilikçi bir projedir. GPT teknolojisini kullanarak 
          haberleri analiz eder ve kullanıcılara özelleştirilmiş içerik sunar.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Misyonumuz</h2>
        <p className="mb-6">
          Kullanıcılarımıza güncel haberleri en hızlı ve en doğru şekilde ulaştırmak, 
          yapay zeka teknolojileri ile haberleri analiz ederek değerli içgörüler sunmak.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Vizyonumuz</h2>
        <p className="mb-6">
          Yapay zeka destekli haber analizi alanında öncü olmak ve kullanıcılarımıza 
          en iyi haber deneyimini sunmak.
        </p>
      </div>
    </div>
  );
} 