import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HomePage,
  HomeV2Page,
  HomeV3Page,
  PricingPage,
  DashboardPage,
  AuthPage,
  NotFoundPage,
  ComingSoonPage,
  DynamicRoutePage,
} from "@/components/site";
import { ShowcasePage } from "@/pages/showcase";

const queryClient = new QueryClient();

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={ShowcasePage} />
      <Route path="/home-v1"><HomePage /></Route>
      <Route path="/home-v2"><HomeV2Page /></Route>
      <Route path="/home-v3"><HomeV3Page /></Route>
      <Route path="/pricing"><PricingPage /></Route>
      <Route path="/dashboard-overview"><DashboardPage /></Route>
      <Route path="/sign-in"><AuthPage mode="sign-in" /></Route>
      <Route path="/sign-up"><AuthPage mode="sign-up" /></Route>
      <Route path="/forgot-password"><AuthPage mode="forgot" /></Route>
      <Route path="/404"><NotFoundPage /></Route>
      <Route path="/coming-soon"><ComingSoonPage /></Route>
      <Route><DynamicRoutePage /></Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") ?? ""}>
        <AppRouter />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
