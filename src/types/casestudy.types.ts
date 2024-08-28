// // Exporting the enum for case study variants
// export enum CaseStudyVariant {
//   FullstackProject = "Fullstack Project",
//   BackendProject = "Backend Project",
//   FrontendProject = "Frontend Project",
//   Branding = "Branding",
//   Media = "Media",
// }

// // Exporting the interface for case study statistics
export type CaseStudyStat = {
  stat: string;
  statCategory: string;
};

export type CaseStudy = {
  id: number;
  projectId: string | null;
  mainDescription?: string | null;
  showreel?: string | null;
  tagline?: string | null;
  colorPalette?: string[] | null;
  mockups?: string[] | null;
  videos?: string[] | null;
  stats?: CaseStudyStat[] | null;
};

// // Exporting types for each specific case study structure
// export type FullstackProjectCaseStudy = {
//   variant: CaseStudyVariant.FullstackProject;
// };

// export type BackendProjectCaseStudy = {
//   variant: CaseStudyVariant.BackendProject;
//   apiEndpoints: string[];
//   databaseDetails: string;
// };

// // export type FrontendProjectCaseStudy = {
// //   variant: CaseStudyVariant.FrontendProject;
// //   showreel: string;
// //   tagline: string;
// //   mainDescription: string;
// //   colorPallete: string[];
// //   typography: string;
// //   mockups: string[];
// //   thumbnail: string;
// //   stats: CaseStudyStat[];
// // };

// // export type BrandingCaseStudy = {
// //   variant: CaseStudyVariant.Branding;
// //   brandIdentity: string;
// //   campaignDetails: string;
// // };

// // export type MediaCaseStudy = {
// //   variant: CaseStudyVariant.Media;
// //   mediaType: string;
// //   distributionChannels: string[];
// // };

// // Exporting the mapping type for the case study variants and their corresponding types
// export type CaseStudyMap = {
//   [CaseStudyVariant.FullstackProject]: FullstackProjectCaseStudy;
//   [CaseStudyVariant.BackendProject]: BackendProjectCaseStudy;
//   [CaseStudyVariant.FrontendProject]: FrontendProjectCaseStudy;
//   [CaseStudyVariant.Branding]: BrandingCaseStudy;
//   [CaseStudyVariant.Media]: MediaCaseStudy;
// };

// // Exporting the unified CaseStudy type
// export type CaseStudy = CaseStudyMap[keyof CaseStudyMap];
