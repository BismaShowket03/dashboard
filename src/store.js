import { create } from "zustand";
import { initialData } from "./data";

const useStore = create((set) => ({
  categories: initialData.categories,

  addWidget: (categoryName, widget) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.name === categoryName
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      ),
    })),

  removeWidget: (categoryName, widgetId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.name === categoryName
          ? {
              ...category,
              widgets: category.widgets.filter((w) => w.id !== widgetId),
            }
          : category
      ),
    })),

  searchWidgets: (query) =>
    set((state) => ({
      categories: state.categories.map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
          widget.name.toLowerCase().includes(query.toLowerCase())
        ),
      })),
    })),
}));

export default useStore;
