import React from 'react'
import styles from "./first-form.module.css"

export default function Header() {
  return (
    <>
      <p>step1</p>
      <h2>あなたの情報</h2>

      <div>
        <h3>生年月日</h3>
        {/* 年月日入力 */}
        <input type="number" id="head-birth-year" min="0" maxLength="4" />年
        <input type="number" id="head-birth-month" min="0" maxLength="2" />月
        <input type="number" id="head-birth-day" min="0" maxLength="2" />日
      </div>

      <div>
        <h3>ご年齢</h3>
        <select name="your_age">
          <option value="" selected></option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
          <option value="49">49</option>
          <option value="50">50</option>
          <option value="51">51</option>
          <option value="52">52</option>
          <option value="53">53</option>
          <option value="54">54</option>
          <option value="55">55</option>
          <option value="56">56</option>
          <option value="57">57</option>
          <option value="58">58</option>
          <option value="59">59</option>
          <option value="60">60</option>
          <option value="61">61</option>
          <option value="62">62</option>
          <option value="63">63</option>
          <option value="64">64</option>
          <option value="65">65</option>
          <option value="66">66</option>
          <option value="67">67</option>
          <option value="68">68</option>
          <option value="69">69</option>
          <option value="70">70</option>
          <option value="71">71</option>
          <option value="72">72</option>
          <option value="73">73</option>
          <option value="74">74</option>
          <option value="75">75</option>
        </select>
      </div>

      <div>
        <h3>貯金・預金の額</h3>
        <input type="number" id="savings-amount" name="savingsAmount" min="0" maxLength="10" />万円
      </div>

      <div>
        <h3>投資資金の合計額</h3>
        <input type="number" id="investment-total" name="investmentTotal" min="0" maxLength="10" />万円
      </div>

      <div>
        <h3>投資の想定年利</h3>
        <input type="number" id="investment-annual-rate" name="investmentAnnualRate" maxLength="10" />%
      </div>

      <div>
        <h3>ご職業</h3>
        <select name="occupation" id="occupation">
          <option value="" selected></option>
          <option value="1">会社員</option>
          <option value="2">公務員</option>
          <option value="3">自営業</option>
          <option value="4">専業主婦／主夫</option>
        </select>
      </div>

      <div>
        <h3>手取り年収</h3>
        <input type="number" id="net-annual-income" name="netAnnualIncome" min="0" maxLength="6" />万円
      </div>

      <div>
        <h3>退職金の有無</h3>
        <input type="radio" id="retirement-bonus-none" name="retirementBonus" value="0" />ない
        <input type="radio" id="retirement-bonus-exist" name="retirementBonus" value="1" />ある
      </div>

      <div>
        <h3>想定される退職金の額</h3>
        <input type="number" id="expected-retirement-bonus" name="expectedRetirementBonus" min="0" maxLength="10" />万円
      </div>

      <div>
        <h3>退職年齢</h3>
        <select name="retirement-age" id="retirementAge">
          <option value="" selected></option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
          <option value="49">49</option>
          <option value="50">50</option>
          <option value="51">51</option>
          <option value="52">52</option>
          <option value="53">53</option>
          <option value="54">54</option>
          <option value="55">55</option>
          <option value="56">56</option>
          <option value="57">57</option>
          <option value="58">58</option>
          <option value="59">59</option>
          <option value="60">60</option>
          <option value="61">61</option>
          <option value="62">62</option>
          <option value="63">63</option>
          <option value="64">64</option>
          <option value="65">65</option>
          <option value="66">66</option>
          <option value="67">67</option>
          <option value="68">68</option>
          <option value="69">69</option>
          <option value="70">70</option>
          <option value="71">71</option>
          <option value="72">72</option>
          <option value="73">73</option>
          <option value="74">74</option>
          <option value="75">75</option>
        </select>
      </div>

      <div>
        <h3>退職後の労働予定</h3>
        <input type="radio" id="post-retirement-work-none" name="postRetirementWork" value="0" />ない
        <input type="radio" id="post-retirement-work-exist" name="postRetirementWork" value="1" />ある
      </div>

      <div>
        <h3>想定手取り年収</h3>
        <input type="number" id="expected-net-annual-income" name="expectedNetAnnualIncome" min="0" maxLength="10" />万円
      </div>

      <div>
        <h3>性別</h3>
        {/* 性別選択 */}
        <input type="radio" id="head-gender-female" name="head-gender" value="0" />男性
        <input type="radio" id="head-gender-male" name="head-gender" value="1" />女性
        <input type="radio" id="head-gender-male" name="head-gender" value="2" />その他
      </div>

      <h3>お住まいの都道府県</h3>
      <p>
        <select name="ListPref" id="ListPref">
          {/* 都道府県選択 */}
          <option value="" selected></option>
          <option value="1">北海道</option>
          <option value="2">青森県</option>
          <option value="3">岩手県</option>
          <option value="4">宮城県</option>
          <option value="5">秋田県</option>
          <option value="6">山形県</option>
          <option value="7">福島県</option>
          <option value="8">茨城県</option>
          <option value="9">栃木県</option>
          <option value="10">群馬県</option>
          <option value="11">埼玉県</option>
          <option value="12">千葉県</option>
          <option value="13">東京都</option>
          <option value="14">神奈川県</option>
          <option value="15">新潟県</option>
          <option value="16">富山県</option>
          <option value="17">石川県</option>
          <option value="18">福井県</option>
          <option value="19">山梨県</option>
          <option value="20">長野県</option>
          <option value="21">岐阜県</option>
          <option value="22">静岡県</option>
          <option value="23">愛知県</option>
          <option value="24">三重県</option>
          <option value="25">滋賀県</option>
          <option value="26">京都府</option>
          <option value="27">大阪府</option>
          <option value="28">兵庫県</option>
          <option value="29">奈良県</option>
          <option value="30">和歌山県</option>
          <option value="31">鳥取県</option>
          <option value="32">島根県</option>
          <option value="33">岡山県</option>
          <option value="34">広島県</option>
          <option value="35">山口県</option>
          <option value="36">徳島県</option>
          <option value="37">香川県</option>
          <option value="38">愛媛県</option>
          <option value="39">高知県</option>
          <option value="40">福岡県</option>
          <option value="41">佐賀県</option>
          <option value="42">長崎県</option>
          <option value="43">熊本県</option>
          <option value="44">大分県</option>
          <option value="45">宮崎県</option>
          <option value="46">鹿児島県</option>
          <option value="47">沖縄県</option>
          <option value="99">海外・その他</option>
        </select><br />
        ※収入や支出に関して、都道府県ごとの平均値・金額を自動反映してシミュレーションできるようになります。
      </p>
    </>
  )
}
