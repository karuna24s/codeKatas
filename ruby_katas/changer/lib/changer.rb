class Changer
  def change(amount)
    [1] * amount
  end
end
#change(1) => [1]
#change(25) => [25]
#change(15) => [10, 5]
#change(99) => [25, 25 ,25 ,10 ,10 ,1 ,1 ,1 ,1]
