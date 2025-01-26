import { AppJobsPage } from "pages/app-jobs";
import { AuthPage } from "pages/auth";
import { CompanyPage } from "pages/company";
import { RouteRecordRaw } from "vue-router";

export const routesList: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppJobsPage,
    name: 'applicant'
  },
  {
    path: '/auth',
    component: AuthPage,
    name: "auth",
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyPage
  }
]