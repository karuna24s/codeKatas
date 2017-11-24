require_relative '../lib/changer.rb'
require 'rspec'

describe Changer do
  let(:changer) { Changer.new }
  it 'has a change method' do
    expect(changer.respond_to?(:change)).to eq(true)
  end

  it 'returns 1 penny for 1 penny' do
    expect(changer.change(1)).to eq([1])
  end

  it 'returns 3 pennies for 3' do
    expect(changer.change(3)).to eq([1, 1, 1])
  end

  it 'returns 1 nickel for 5' do
    expect(changer.change(5)).to eq([5])
  end
end
