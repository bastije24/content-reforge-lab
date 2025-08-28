import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Sparkles, Video, Image, RefreshCw, Shield } from "lucide-react";

const Landing = () => {
  const liteFeatures = [
    "🎞️ Convert unlimited videos to GIF (best quality on market)",
    "🖼️ Convert unlimited HEIC / PNG / WEBP → JPEG", 
    "🎥 Convert unlimited MOV → MP4",
    "🔮 Bulk clip creation tool (upload long video, generate unlimited clips)",
    "🔮 Bulk watermark adder tool",
    "🖼️ Turn videos into high quality PNG frames",
    "❓ Much more to come"
  ];

  const fullFeatures = [
    "🔄 Faceswap unlimited (videos + pictures)",
    "📤 Repurpose unlimited content for Reddit (videos, gifs, pictures)", 
    "💘 Repurpose unlimited dating app pictures (Tinder, Bumble, etc.)",
    "🎭 TikTok Spoofer (beta)",
    "🧩 Detect file similarity (unlimited)",
    "❓ Much more to come"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Lovable Spoofer
          </h1>
          <div className="flex gap-3">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            All-in-One Spoofing Toolkit
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            All-in-one Spoofer & 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Repurposing Toolkit</span>
            <br />– from GIFs to Faceswap, Reddit content & TikTok Spoofing.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlimited content repurposing, faceswap, spoofing tools & the best video-to-GIF converter on the market.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="shadow-primary">
              <Zap className="w-5 h-5 mr-2" />
              Get Lite - $29/mo
            </Button>
            <Button size="lg" variant="outline" className="shadow-secondary">
              <Sparkles className="w-5 h-5 mr-2" />
              Get Full - $79/mo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lovable Lite */}
            <Card className="relative overflow-hidden shadow-subtle">
              <CardHeader className="bg-gradient-subtle pb-8">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Lovable Lite</CardTitle>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    $29/mo
                  </Badge>
                </div>
                <p className="text-muted-foreground">Perfect for content creators</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {liteFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" size="lg">
                  Get Lite Now
                </Button>
              </CardContent>
            </Card>

            {/* Lovable Spoofer Full */}
            <Card className="relative overflow-hidden shadow-primary border-brand-primary/20">
              <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="bg-gradient-primary text-white pb-8">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Lovable Spoofer Full</CardTitle>
                  <Badge variant="secondary" className="text-lg px-3 py-1 bg-white/20 text-white border-white/30">
                    $79/mo
                  </Badge>
                </div>
                <p className="text-white/90">Everything in Lite + advanced spoofing</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  <p className="text-sm font-medium text-muted-foreground">
                    ✅ Everything from Lovable Lite +
                  </p>
                  {fullFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" size="lg" variant="outline">
                  Get Full Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground">Unlimited usage, no daily limits</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg bg-background">
              <thead className="bg-gradient-subtle">
                <tr>
                  <th className="text-left p-4 font-medium">Features</th>
                  <th className="text-center p-4 font-medium">Lite ($29/mo)</th>
                  <th className="text-center p-4 font-medium">Full ($79/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4">Video to GIF conversion</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Image format conversion</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Bulk clip creation</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Faceswap (videos + pictures)</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Reddit content repurposing</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Dating app picture repurposing</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">TikTok Spoofer (beta)</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">What sets us apart?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best video-to-GIF converter</h3>
              <p className="text-muted-foreground">Quality unmatched in the market</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unlimited conversions</h3>
              <p className="text-muted-foreground">Spoofing tools in one place</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growing toolkit</h3>
              <p className="text-muted-foreground">Always adding new features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-subtle border-t py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Button size="lg" className="shadow-primary">
              Get Lite
            </Button>
            <Button size="lg" variant="outline" className="shadow-secondary">
              Get Full
            </Button>
          </div>
          
          <p className="text-muted-foreground">
            Lovable Spoofer – Unlimited spoofing & repurposing tools. Much more to come…
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;