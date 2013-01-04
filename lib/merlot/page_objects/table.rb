module Merlot
  # Basic Table object
  class Table < Element
    # Returns the text of the specified cell
    def cell_text(cell)
      text = cell.text
    end

    # Returns an array of cells (<td> elements) for the given row
    def cells(table_row)
      cells = table_row.find_elements(:tag_name, "td")
    end

    # Returns total number of <tr> elements in table
    def row_count
      rows = @object.find_elements(:tag_name, "tr")
      num_rows = rows.length
    end

    # Returns an array of rows in the table
    def rows
      rows = @object.find_elements(:tag_name, "tr")
    end
  end
end