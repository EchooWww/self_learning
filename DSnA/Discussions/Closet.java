package DSnA.Discussions;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Closet {
  class Clothing {
    private String type;
    private String color;

    public Clothing(String type, String color) {
      this.type = type;
      this.color = color;
    }

    public void dyeColor(String newColor) {
      this.color = newColor;
    }

    public void enterEmoPhase(List<String> happyColors){
      for (Clothing cloth: uniqueItems) {
        for (String color: happyColors) {
          if (cloth.color.equals(color)) cloth.dyeColor("Black");
        }
      }
    }
  }

  public List<Clothing> uniqueItems;


  public Closet (List<Clothing> clothList) {
    List<Clothing> uniqueItems = new ArrayList<>();
    for (Clothing cloth: clothList) {
      if(!uniqueItems.contains(cloth)) uniqueItems.add(cloth);
    }
    this.uniqueItems = uniqueItems;
  }

  public List<Clothing> getItemByColor(String color) {
    List <Clothing> colorItems = new ArrayList<>();
    for (Clothing cloth: uniqueItems) {
      if(cloth.color == color) colorItems.add(cloth);
    }
    return colorItems;
  }

  public List<Clothing> getItemsByDay(Map<String, String> daysToColors, String currentDay) {
    String color = daysToColors.get(currentDay);
    return this.getItemByColor(color);
  }

}
