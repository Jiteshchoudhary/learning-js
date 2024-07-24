In this tutorial, you learn about the JavaScript Array `length` property:

**Note index start from 0 but length always pick from 1 **

1. **Definition**: The `length` property is an unsigned, 32-bit integer always greater than the highest index in the array. It can hold up to 4,294,967,296 elements.

2. **Dense Arrays**: For arrays with contiguous indexes (e.g., `['red', 'green', 'blue']`), `length` accurately reflects the number of elements. Modifying `length` updates the count or empties the array.

3. **Sparse Arrays**: For arrays with gaps in indexes (e.g., `[10, , 20, 30]`), `length` is greater than the highest index but doesn’t show the actual number of defined elements. 

4. **Modifying Length**:
   - Setting `length` to zero empties the array.
   - Reducing `length` removes elements beyond the new length.
   - Increasing `length` makes the array sparse by adding empty slots.

**Summary**: The `length` property shows the number of elements in dense arrays and the highest index + 1 in sparse arrays. You can adjust `length` to modify array contents or structure.